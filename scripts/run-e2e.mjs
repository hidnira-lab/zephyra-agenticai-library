import { execFileSync, spawn } from "node:child_process";

const baseUrl = "http://127.0.0.1:3000";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(timeoutMs = 120_000) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl, { redirect: "manual" });

      if (response.status >= 200 && response.status < 500) {
        return;
      }
    } catch {
      // Server is still starting.
    }

    await wait(500);
  }

  throw new Error(`Timed out waiting for ${baseUrl}`);
}

function stopServer(server) {
  if (!server.pid || server.killed) {
    return;
  }

  try {
    if (process.platform === "win32") {
      execFileSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], {
        stdio: "ignore"
      });
    } else {
      process.kill(-server.pid, "SIGTERM");
    }
  } catch {
    server.kill("SIGKILL");
  }
}

const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "dev", "--hostname", "127.0.0.1"],
  {
    detached: process.platform !== "win32",
    env: process.env,
    stdio: ["ignore", "inherit", "inherit"]
  }
);

let exitCode = 1;

try {
  await waitForServer();

  const test = spawn(
    process.execPath,
    ["node_modules/playwright/cli.js", "test", "--config", "playwright.config.ts"],
    {
      env: process.env,
      stdio: "inherit"
    }
  );

  exitCode = await new Promise((resolve) => {
    test.on("exit", (code) => resolve(code ?? 1));
    test.on("error", () => resolve(1));
  });
} finally {
  stopServer(server);
}

process.exit(exitCode);
