export function getFilesToBackup(lastBackup: number, changes: number[][]) {
  return [...new Set(
    changes
      .filter(([_, t]) => t > lastBackup)
      .map(([id]) => id)
  )].sort((a, b) => a - b);
}