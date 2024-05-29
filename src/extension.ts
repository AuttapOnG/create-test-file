"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import createTestFile from "./createTestFile";
import openTestFile from "./openTestFile";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposableCreateTestFileFromMenu = vscode.commands.registerCommand(
    "extension.createTestFileFromMenu",
    (fileUri?: vscode.Uri) => {
      createTestFile(fileUri.fsPath);
    }
  );

  const disposableOpenTestFileFromMenu = vscode.commands.registerCommand(
    "extension.openTestFileFromMenu",
    (fileUri?: vscode.Uri) => {
      openTestFile(fileUri.fsPath);
    }
  );

  context.subscriptions.push(disposableCreateTestFileFromMenu);
  context.subscriptions.push(disposableOpenTestFileFromMenu);
}

// this method is called when your extension is deactivated
export function deactivate() {}
