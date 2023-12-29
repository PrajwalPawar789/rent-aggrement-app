import React from 'react';
import { PDFViewer, Document, Page, View, Text } from '@react-pdf/renderer';

const RentAgreement = ({ date, name, propertyAddress, initialPeriod }) => {
  const styles = {
    page: 'flex-row bg-gray-300 p-10',
    section: 'm-10 p-10 flex-grow',
    heading: 'text-xl font-bold mb-10',
    text: 'mb-5',
  };

  const MyDocument = (
    // <Document>
    //   <Page size="A4">
    //     <View>
    //       <Text>
    //         This Deed of Rent is made on {date} between {name}.

    //       </Text>
    //     </View>
    //   </Page>
    // </Document>

    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.heading}>RENT AGREEMENT</Text>

          <Text style={styles.paragraph}>
            This Deed of Rent is made on {date} between {name}, hereinafter referred to as the "Landlord," and
            ____________________, hereinafter referred to as the "Tenant."
          </Text>

          <View style={styles.section}>
            <Text style={styles.heading}>RENTED PROPERTY DETAILS</Text>
            <Text style={styles.paragraph}>
              The Landlord agrees to rent the property located at {propertyAddress} (hereinafter referred to as the
              "Property") to the Tenant for residential purposes.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>TERMS OF TENANCY</Text>
            <Text style={styles.paragraph}>
              The tenancy shall be for the period of {initialPeriod} months, commencing on {date}, and may be renewed
              with mutual consent.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>RENT PAYMENT</Text>
            <Text style={styles.paragraph}>
              The Tenant agrees to pay a monthly rent on or before the ________ day of each month.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>SECURITY DEPOSIT</Text>
            <Text style={styles.paragraph}>
              The Tenant shall provide a security deposit to be refunded upon termination of the tenancy, subject to any
              deductions for damages or unpaid rent.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>OTHER AGREEMENTS</Text>
            <Text style={styles.paragraph}>
              Both parties agree to abide by the terms and conditions of this agreement. Any changes must be agreed upon
              in writing.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>IN WITNESS WHEREOF</Text>
            <Text style={styles.paragraph}>
              This agreement is executed on {date} by the Landlord and Tenant in the presence of the undersigned
              witnesses.
            </Text>
          </View>

          <View style={styles.section}>
            <Text>______________________________</Text>
            <Text>Landlord's Signature</Text>
            <Text>Witness: ________________________</Text>
          </View>

          <View style={styles.section}>
            <Text>______________________________</Text>
            <Text>Tenant's Signature</Text>
            <Text>Witness: ________________________</Text>
          </View>
        </View>
      </Page>
    </Document>

  );

  const downloadPdf = () => {
    const blob = new Blob([MyDocument], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'RentAgreement.pdf';
    link.target = '_blank'; // Add this line
    link.click();
    URL.revokeObjectURL(pdfUrl);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Rent Agreement</h2>
      <PDFViewer width="800" height="600">
        {MyDocument}
      </PDFViewer>
      <button
        onClick={downloadPdf}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default RentAgreement;
