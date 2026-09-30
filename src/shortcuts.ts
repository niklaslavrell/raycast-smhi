import { Keyboard } from "@raycast/api";

// The extension ships for macOS and Windows, so a bare `cmd` binding is ambiguous: Raycast can't
// know what the Windows equivalent should be. Most of the actions here use Keyboard.Shortcut.Common,
// which already carries both platforms; these three have no Common equivalent and spell it out.
//
// Not `as const satisfies`: Keyboard.Shortcut wants a mutable KeyModifier[], which a readonly
// tuple doesn't satisfy. Plain `satisfies` still contextually types the modifiers.
export const SHORTCUTS = {
  toggleDetail: {
    macOS: { modifiers: ["cmd"], key: "d" },
    Windows: { modifiers: ["ctrl"], key: "d" },
  },
  toggleFavorite: {
    macOS: { modifiers: ["cmd"], key: "f" },
    Windows: { modifiers: ["ctrl"], key: "f" },
  },
  resetRanking: {
    macOS: { modifiers: ["cmd", "shift"], key: "backspace" },
    Windows: { modifiers: ["ctrl", "shift"], key: "backspace" },
  },
} satisfies Record<string, Keyboard.Shortcut>;
