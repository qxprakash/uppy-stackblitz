import type { UppyFile } from './UppyFile.js'

export function filterNonFailedFiles(
  files: UppyFile<any, any>[],
): UppyFile<any, any>[] {
  console.log(
    'hello from uppy fileFilters.ts <----> asdfhj asdfkajsdf asdf asdfasdf',
  )
  const hasError = (file: UppyFile<any, any>): boolean =>
    'error' in file && !!file.error

  const filesSucess = files.filter((file) => !hasError(file))
  console.log('files success: ', filesSucess)
  return filesSucess
}

// Don't double-emit upload-started for Golden Retriever-restored files that were already started
export function filterFilesToEmitUploadStarted(
  files: UppyFile<any, any>[],
): UppyFile<any, any>[] {
  return files.filter(
    (file) => !file.progress?.uploadStarted || !file.isRestored,
  )
}
