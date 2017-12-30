
import React from 'react';
import classes from './ResourceView.css';
import VidViewer from '../../UI/Viewer/VidViewer/VidViewer';
import PdfViewer from '../../UI/Viewer/PdfViewer/PdfViewer';
import DocViewer from '../../UI/Viewer/DocViewer/DocViewer';
import AudViewer from '../../UI/Viewer/AudViewer/AudViewer';

const resourceView = (props) => {
  let resource = null;
  if (props.resource === 'pdf') {
    resource = <PdfViewer resource={resource} />
  }

  if (props.resource === 'doc') {
    resource = <DocViewer resource={resource} />
  }

  if (props.resource === 'aud') {
    resource = <AudViewer resource={resource} />
  }

  if (props.resource === 'vid') {
    resource = <VidViewer resource={resource} />
  }

  return (
    { resource }
  )
}

export default resourceView;

// props of a resource
// resource will be of a certain format (pdf, word, video, audio)
// if pdf, open pdf viewer
// if word, open word viewr
// if video, show youtube mini window
// if audio, show mp3 player
// if soundslice, show via youtube