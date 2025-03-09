import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import XHRUpload from '@uppy/xhr-upload';
import Tus from '@uppy/tus';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

// const XHR_ENDPOINT = 'example.com/i_dont_exist';
const TUS_ENDPOINT = 'http://localhost:1080/files';
const RESTORE = false;

const uppyDashboard = new Uppy({ debug: true }).use(Dashboard, {
  inline: true,
  target: '#app',
  showProgressDetails: true,
  proudlyDisplayPoweredByUppy: true,
  fileManagerSelectionType: 'file',

});

// uppyDashboard.use(XHRUpload, {
//   endpoint: XHR_ENDPOINT,
//   limit: 6,
//   bundle: true,
// });


uppyDashboard.use(Tus, { endpoint: TUS_ENDPOINT })

window.uppy = uppyDashboard;

uppyDashboard.on('complete', (result) => {
  console.log("upload result -->", result);
  if (result.failed.length === 0) {
    console.log('Upload successful üòÄ');
  } else {
    console.warn('Upload failed üòû');
  }
  console.log('successful files:', result.successful);
  console.log('failed files:', result.failed);
});


console.log('uppy test ------> ');


window.uppyUpload = async () => {
  console.log(`uppy upload --> clicked`);
  console.error('start');
  try{
    const results = await uppy.upload();
    console.log('upload results -->', results);
    // console.warn('uppy results', results);
  }catch(err){
    console.error('error ocurred in <-------- uppy.upload() ---> {} ', err);

  }

// try {
//   await uppy.upload()
// } catch (error) {
//   // Get all files with error status
//   const failedFiles = uppy.getFiles().filter(file => file.status === 'error')
//   console.log('Failed files:', failedFiles)

//   // Each failed file will have error info
//   failedFiles.forEach(file => {
//     console.log(`File ${file.name} failed:`, file.error)
//   })
// }

};



window.uppyRetry = async () => {
  console.log('retry clicked');
  try{
    const results = await uppy.retryAll();
    console.log('retry results -->', results);
  }catch(err){
    console.error('error ocurred in <-------- uppy.retryAll() ---> {} ', err);
  }
}