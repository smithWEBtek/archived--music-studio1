
import React from 'react';
import classes from './ResourceView.css';
import VidViewer from '../../UI/Viewer/VidViewer/VidViewer';
import PdfViewer from '../../UI/Viewer/PdfViewer/PdfViewer';
import DocViewer from '../../UI/Viewer/DocViewer/DocViewer';
import AudViewer from '../../UI/Viewer/AudViewer/AudViewer';

const resourceView = (props) => {
  let resource = null;
  if (props.format === 'pdf') {
    resource = <PdfViewer resource={resource} />
  }

  if (props.format === 'doc') {
    resource = <DocViewer resource={resource} />
  }

  if (props.format === 'aud') {
    resource = <AudViewer resource={resource} />
  }

  if (props.format === 'vid') {
    resource = <VidViewer resource={resource} />
  }

  return (
    <div className={classes.ResourceView}>
      {resource}
    </div>
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