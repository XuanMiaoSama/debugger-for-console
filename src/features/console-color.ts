import { resolvedConfig } from '../extension'

const DEFAULT_COLORS = [
  '#e74c3c',
  '#3498db',
  '#2ecc71',
  '#f39c12',
  '#9b59b6',
  '#1abc9c',
  '#e67e22',
  '#34495e',
  '#16a085',
  '#27ae60',
  '#2980b9',
  '#8e44ad',
  '#c0392b',
  '#d35400',
  '#7f8c8d',
  '#2c3e50',
  '#f1c40f',
  '#e84393',
  '#00b894',
  '#6c5ce7',
]

export function getConsoleColor() {
  const enableColor = resolvedConfig.get<boolean>('consoleColor', false)

  if (!enableColor) {
    return ''
  }

  const customColorList = resolvedConfig.get<string[]>('consoleColorList', [])
  const colorList = customColorList.length > 0 ? customColorList : DEFAULT_COLORS

  return colorList[Math.floor(Math.random() * colorList.length)]
}
