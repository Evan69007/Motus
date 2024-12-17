import { expect, test } from 'vitest'
import { tryWord } from './Motus'

// mettre en commentaire les variables déclarés au début de Motus.js avant de lancer les test

test("test de tryWord avec des mots identiques", () => {
	expect(tryWord("Bonjour", "Bonjour")).toBe(true)
})

test("test de tryWord avec des mots identiques mais une lettre minuscule au lieu de majuscule", () => {
	expect(tryWord("bonjour", "Bonjour")).toBe(true)
})

test("test de tryWord avec une lettre différente", () => {
	expect(tryWord("conjour", "bonjour")).toStrictEqual({wellPlaced: ["o", "n", "j", "o", "u", "r"], missplaced: [], notInWord: ["c"]})
})

test("test de tryWord avec une lettre en plus au début", () => {
	expect(tryWord("cbonjour", "bonjour")).toStrictEqual({wellPlaced: [], missplaced: ["b", "o", "n", "j", "o", "u", "r"], notInWord: ["c"]})
})

test("test de tryWord avec aucune letre identique", () => {
	expect(tryWord("bonjour", "lampe")).toStrictEqual({wellPlaced: [], missplaced: [], notInWord: ["b", "o", "n", "j", "o", "u", "r"]})
})