function getFilesToBackup(lastBackup, changes) {
  return [...new Set(
    changes
      .filter(([_, t]) => t > lastBackup)
      .map(([id]) => id)
  )].sort((a, b) => a - b);
}