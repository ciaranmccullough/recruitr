import React from 'react';
// Components
import Header from '../../components/header/header';
import PageFrame from '../../components/page-frame/page-frame';
import Footer from '../../components/footer/footer';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <PageFrame>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sem at
          libero malesuada porttitor nec ac erat. Nullam semper est velit, vitae
          eleifend dui pellentesque vitae. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean fringilla scelerisque pretium.
          Donec ut ipsum lacus. Nunc porta ligula dictum, facilisis ligula quis,
          dictum elit. Pellentesque iaculis urna in elit porttitor, at
          vestibulum ante pretium. Donec elit ante, elementum et tincidunt eu,
          fermentum vel elit. Donec non massa id nulla euismod lobortis eu id
          arcu. Etiam scelerisque sapien massa, at porta enim sollicitudin ac.
          Nulla facilisi. Nunc venenatis euismod ligula, in elementum sapien
          interdum ut. Quisque sapien lacus, semper a tristique ac, gravida eget
          lorem. In placerat bibendum convallis. Fusce diam mauris, efficitur a
          lectus quis, fringilla euismod nulla. Cras egestas risus vitae
          tincidunt ultrices. Nulla fermentum consectetur cursus. Nulla et nunc
          fermentum, suscipit justo eu, finibus nulla. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Aenean et nisi mauris. Fusce
          vel magna sit amet tellus elementum pharetra. Nunc porta ultricies
          tellus non consequat. Curabitur sit amet malesuada nulla, vitae
          vulputate magna. Nullam bibendum molestie massa in volutpat. Nullam
          tincidunt, orci sit amet fermentum consequat, massa lectus placerat
          metus, sed tristique nisi velit nec nunc. Nunc finibus sapien a magna
          consectetur, non efficitur orci fringilla. Mauris feugiat elit ut
          augue interdum lobortis. Fusce efficitur varius tortor quis vehicula.
          Donec ullamcorper ultricies neque et volutpat. Integer malesuada
          lobortis massa posuere vehicula. Sed massa libero, cursus vel lobortis
          tempus, facilisis in justo. Sed metus arcu, ultrices ac egestas id,
          interdum sit amet nunc. Donec viverra, lorem eget condimentum viverra,
          erat magna venenatis metus, nec tempus tellus est eget magna. Aliquam
          aliquet tempus commodo. Suspendisse non massa ac velit rhoncus
          volutpat vitae et neque. Fusce auctor finibus lacus a convallis.
          Curabitur elementum mollis erat, quis consectetur tellus vulputate sit
          amet. Aliquam cursus justo diam, bibendum aliquet mi fermentum vel.
          Vivamus rutrum, mi ut fermentum accumsan, lacus purus rhoncus turpis,
          ac convallis risus orci ac ligula. Proin quis nunc laoreet, malesuada
          nisl a, sagittis est. Proin massa nunc, ornare et fringilla vitae,
          varius vitae ante. Phasellus vulputate ligula eu nisl vulputate
          pharetra. Duis sed facilisis lectus, suscipit fringilla nibh.
          Curabitur eu justo efficitur urna pulvinar dictum. Mauris sed blandit
          enim. Proin cursus luctus quam fermentum malesuada. Aliquam venenatis
          sem nec blandit malesuada. Phasellus eget ultrices velit, a vehicula
          urna. Aliquam porta nibh in dui euismod, non sollicitudin orci
          ultricies. Nullam viverra, ante vestibulum rhoncus pulvinar, mauris
          tortor rutrum nunc, in dapibus turpis arcu et eros. Cras egestas
          suscipit malesuada. Aliquam vitae rhoncus magna, vel venenatis augue.
          Cras ut ultrices est. In eget semper turpis. Nam interdum posuere nisi
          non ultrices. Morbi dapibus nisl fringilla pretium dignissim. Duis
          nisl purus, laoreet et dignissim pharetra, ullamcorper eget eros.
          Quisque vestibulum, mauris ut efficitur consequat, erat erat ultrices
          massa, ut gravida enim urna nec elit. Nullam faucibus lectus vitae
          nulla porta euismod euismod nec quam. Nam tincidunt nunc nec tempor
          auctor. Maecenas eget sagittis sem, in dapibus tortor.{' '}
        </p>
      </PageFrame>
      <Footer />
    </div>
  );
}
