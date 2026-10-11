import { test } from "node:test";
import assert from "node:assert/strict";
import { getFileName } from "./helpers";

test("getFileName keeps the names of existing posts", () => {
  assert.equal(
    getFileName(
      "LifeOS - Meu Sistema de gestão pessoal",
      "35eb8e18-e88b-80a8-b05a-d073210ac3c6",
    ),
    "LifeOS-Meu-Sistema-de-gestão-pessoal-35eb8e18e88b80a8b05ad073210ac3c6.md",
  );
  assert.equal(
    getFileName(
      "Programação Orientada à Objetos",
      "33cb8e18-e88b-805e-8ed0-c877dbc8c3b5",
    ),
    "Programação-Orientada-à-Objetos-33cb8e18e88b805e8ed0c877dbc8c3b5.md",
  );
});

test("getFileName drops characters that break paths and URLs", () => {
  assert.equal(
    getFileName('CI/CD: "por quê?" #1 ', "1234-5678"),
    "CICD-por-quê-1-12345678.md",
  );
});
