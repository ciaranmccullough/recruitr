import React, { createContext, useState } from 'react';

export const ModeContent = createContext({
  isDark: false,
  light: () => {},
  dark: () => {},
  toggle: () => {},
});

export function ModeProvider(props) {}
