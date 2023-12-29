import React from 'react';
import { PDFViewer, Document, Page, View, Text } from '@react-pdf/renderer';

const RentAgreement = ({ date, name }) => {
  const styles = {
    page: 'flex-row bg-gray-300 p-10',
    section: 'm-10 p-10 flex-grow',
    heading: 'text-xl font-bold mb-10',
    text: 'mb-5',
  };

  const MyDocument = (
    <Document>
      <Page size="A4">
        <View>
          <Text>
            This Deed of Rent is made on {date} between {name}.


            NOW THIS AGREEMENT WITNESSETH AND IT IS HEREBY AGREED BY AND BETWEEN
THE PARTIES AS UNDER:
1. That the Lessor hereby grant to the Lessee, the right to enter into and use and
remain in the said premises along with the existing fixtures and fittings listed in
Annexure 1 to this Agreement and that the Lessee shall be entitled to peacefully
possess, and enjoy possession of the said premises, and the other rights herein.
2. That the lease hereby granted shall, unless cancelled earlier under any provision of
this Agreement, remain in force for a period of [Lease Term].
3. That the Lessee will have the option to terminate this lease by giving [one month`s
notice] in writing to the Lessor.
4. That the Lessee shall have no right to create any sub-lease or assign or transfer in
any manner the lease or give to any one the possession of the said premises or any
part thereof.
5. That the Lessee shall use the said premises only for residential purposes.
6. That the Lessor shall, before handing over the said premises, ensure the working of
sanitary, electrical and water supply connections and other fittings pertaining to the
said premises. It is agreed that it shall be the responsibility of the Lessor for their
return in the working condition at the time of re-possession of the said premises
(reasonable wear and tear and loss or damage by fire, flood, rains, accident,
irresistible force or act of God excepted).
7. That the Lessee is not authorized to make any alteration in the construction of the
said premises. The Lessee may however install and remove his own fittings and
fixtures, provided this is done without causing any excessive damage or loss to the
said premises.
8. That the day to day repair jobs such as fuse blow out, replacement of light
bulbs/tubes, leakage of water taps, maintenance of the water pump and other minor
repairs, etc., shall be effected by the Lessee at its own cost, and any major repairs,
either structural or to the electrical or water connection, plumbing leaks, water
seepage shall be attended to by the Lessor. In the event of the Lessor failing to carry
out the repairs on receiving notice from the Lessee, the Lessee shall undertake the
necessary repairs and the Lessor will be liable to immediately reimburse costs
incurred by the Lessee.
9. That the Lessor or its duly authorized agent shall have the right to enter into or upon
the said premises or any part thereof at a mutually arranged convenient time for the
purpose of inspection.
10. That the Lessee shall use the said premises along with its fixtures and fitting in
careful and responsible manner and shall handover the premises to the Lessor in
working condition (reasonable wear and tear and loss or damage by fire, flood,
rains, accidents, irresistible force or act of God excepted).
11. That in consideration of use of the said premises the Lessee agrees that he shall pay
to the Lessor during the period of this agreement, a monthly rent at the rate of
[Monthly Rental in Number & Words]. The amount will be paid in advance on or
before the date of [1st day] of every English calendar month.
12. It is hereby agreed that if default is made by the lessee in payment of the rent for a
period of three months, or in observance and performance of any of the covenants
and stipulations hereby contained and on the part to be observed and performed by
the lessee, then on such default, the lessor shall be entitled in addition to or in the
alternative to any other remedy that may be available to him at this discretion, to
terminate the lease and eject the lessee from the said premises; and to take
possession thereof as full and absolute owner thereof, provided that a notice in
writing shall be given by the lessor to the lessee of his intention to terminate the
lease and to take possession of the said premises. If the arrears of rent are paid or
the lessee comply with or carry out the covenants and conditions or stipulations,
within fifteen days from the service of such notice, then the lessor shall not be
entitled to take possession of the said premises.
13. That in addition to the compensation mentioned above, the Lessee shall pay the
actual electricity, shared maintenance, water bills for the period of the agreement
directly to the authorities concerned. The relevant `start date` meter readings are
[Starting Meter Reading].
14. That the Lessee has paid to the Lessor a sum of [Rental Deposit in Number and
Words] as deposit, free of interest, which the Lessor does accept and acknowledge. 
          </Text>
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
