import React from 'react';

const Imprint = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
        <p className="mb-2">Musterfirma GmbH</p>
        <p className="mb-2">Musterstraße 123</p>
        <p className="mb-2">12345 Musterstadt</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vertreten durch</h2>
        <p className="mb-2">Max Mustermann</p>
        <p className="mb-2">Maria Musterfrau</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p className="mb-2">Telefon: +49 (0) 123 44 55 66</p>
        <p className="mb-2">Telefax: +49 (0) 123 44 55 99</p>
        <p className="mb-2">E-Mail: info@musterfirma.de</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Registereintrag</h2>
        <p className="mb-2">Eintragung im Handelsregister.</p>
        <p className="mb-2">Registergericht: Amtsgericht Musterstadt</p>
        <p className="mb-2">Registernummer: HRB 12345</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
        <p className="mb-2">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
        <p className="mb-2">DE 123 456 789</p>
      </section>
    </div>
  );
};

export default Imprint;