import ReactPDF, { Font } from '@react-pdf/renderer';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import { Button, ButtonType } from '../Button/Button';
import { Spinner } from '../Spinner/Spinner';
import { CVContainer, PDFActions } from './CV.styles';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
      fontWeight: 300,
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
      fontWeight: 500,
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
      fontWeight: 600,
    },
  ],
});

type CVProps = {
  pdf: ReactPDF.UsePDFInstance;
};

export function CV({ pdf }: CVProps) {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageTotal, setPageTotal] = useState(0);

  const goToPreviousPage = () => {
    if (pageNumber === 1) return;

    setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    if (pageNumber === pageTotal) return;

    setPageNumber(pageNumber + 1);
  };

  return (
    <CVContainer>
      <PDFActions>
        <small>
          Page {pageNumber} / {pageTotal || '-'}
        </small>

        <Button
          small
          buttonType={ButtonType.ghost}
          disabled={pageNumber === 1}
          onClick={goToPreviousPage}
        >
          Previous
        </Button>

        <Button
          small
          buttonType={ButtonType.ghost}
          disabled={pageNumber === pageTotal}
          onClick={goToNextPage}
        >
          Next
        </Button>

        {/*<Button small buttonType={ButtonType.ghost} onClick={refreshPDF}>*/}
        {/*  Refresh preview*/}
        {/*</Button>*/}

        {/*<a href={pdf.url as string} download='generated-cv'>*/}
        {/*  Download CV*/}
        {/*</a>*/}
      </PDFActions>

      <Document
        loading={<Spinner position='center' />}
        file={pdf.url}
        onLoadSuccess={(settings) => setPageTotal(settings.numPages)}
      >
        <Page pageNumber={pageNumber} renderMode='svg' />
      </Document>
    </CVContainer>
  );
}
