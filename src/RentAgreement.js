import React from 'react';
import { PDFViewer, Document ,StyleSheet , PageMode, TextBox, ViewMode } from '@react-pdf-viewer/core';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const RentAgreement = ({ date, name }) => {
  const downloadPdf = () => {
    const blob = (
      <Document>
        <PageMode size="A4" style={styles.page}>
          <ViewMode style={styles.section}>
            <TextBox>Rent Agreement</TextBox>
            <TextBox>Date: {date}</TextBox>
            <TextBox>Name: {name}</TextBox>
            {/* Add more fields as needed */}
          </ViewMode>
        </PageMode>
      </Document>
    );

    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'RentAgreement.pdf';
    link.click();

    URL.revokeObjectURL(pdfUrl);
  };

  return (
    <div>
      <h2>Rent Agreement</h2>
      <PDFViewer width="300" height="200">
        <Document>
          <PageMode size="A4" style={styles.page}>
            <ViewMode style={styles.section}>
              <TextBox>Date: {date}</TextBox>
              <TextBox>Name: {name}</TextBox>
              {/* Add more fields as needed */}
            </ViewMode>
          </PageMode>
        </Document>
      </PDFViewer>
      <button onClick={downloadPdf}>Download as PDF</button>
    </div>
  );
};

export default RentAgreement;
