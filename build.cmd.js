// ---------------------------------------------------------------------------------
// Build project automatically.
// Operate host files via native "scp", or can use "ftp" module instead.
// ---------------------------------------------------------------------------------
const Process = require("child_process");
const Path = require("path");

const PLATFORM_OS = process.platform; //development platform OS type: win32-Windows(even on 64 bit)|darwin-MacOS|aix|freebsd|linux|openbsd|sunos|android.
const LOCAL_DIR = "./dist/"; //your local project build directory.
const HOST_PORT = "22"; //your host ssl port.
const HOST_USER = "root"; //your host account.
const HOST_NAME = "8.8.8.8"; //your host IP or domain name.
const HOST_PATH = "/data/website/"; //your website path on host.

// Warning: some wildcard character(such as '*') is invalid on macOS.
if (PLATFORM_OS == "darwin") {
  let temp = Path.resolve(__dirname, `${Path.basename(HOST_PATH)}`);
  console.log("===>[Upload Files Start]<===");
  Process.spawn("rm", ["-rf", temp]).on("close", () => {
    Process.spawn("cp", ["-R", Path.resolve(__dirname, LOCAL_DIR), temp]).on(
      "close",
      () => {
        Process.spawn(
          "scp",
          [
            "-r",
            "-P",
            HOST_PORT,
            temp,
            `${HOST_USER}@${HOST_NAME}:${Path.dirname(HOST_PATH)}`,
          ],
          { stdio: "inherit" }
        ).on("close", () => {
          Process.spawn("rm", ["-rf", temp]).on("close", () => {
            console.log("===>[Upload Files End]<===");
          });
        });
      }
    );
  });
} else if (PLATFORM_OS == "win32") {
  console.log("===>[Upload Files Start]<===");
  Process.spawn(
    "scp",
    [
      "-r",
      "-P",
      HOST_PORT,
      Path.resolve(__dirname, LOCAL_DIR, "*"),
      `${HOST_USER}@${HOST_NAME}:${HOST_PATH}`,
    ],
    { stdio: "inherit" }
  ).on("close", () => {
    console.log("===>[Upload Files End]<===");
  });
}
