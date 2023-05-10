const index = () => {
  return (
    <div className="container md:px-[12%]">
      <div className="flex flex-col pb-32">
        <h1
          className="border-b text-center text-[35px] md:text-[80px] pb-9 font-semibold"
          style={{ borderBottomColor: "rgba(0,0,0,0.15)" }}
        >
          GDPR Commitment
        </h1>
        <div className="pt-32 ">
          <div className="wpb_wrapper">
            <section>
              <div className="box-large">
                <p>
                  At Userback, we are wholly invested in our customer’s success
                  and the protection of customer data.We consider privacy and
                  personal data protection all the way through our product
                  development lifecycle, maintaining the standards of the
                  strictest security policies, including compliance with the
                  GDPR.On this page, we explain our approach and investment in
                  GDPR compliance and how we help our customers comply with the
                  GDPR.
                </p>
                <p>&nbsp;</p>
                <h2>Is Userback GDPR compliant?</h2>
              </div>
            </section>
            <section>
              <div className="box-large">
                <p>
                  Yes, we are compliant with the GDPR. We have devoted a
                  significant amount of effort towards helping our customers
                  fulfil their requirements under the GDPR and local law. For
                  more information, including a copy of our Data Processing
                  Addendum,{" "}
                  <a className="primary" href="https://www.userback.io/dpa">
                    please visit this page
                  </a>
                  .
                </p>
                <p>&nbsp;</p>
                <h2>Data storage</h2>
              </div>
            </section>
            <section>
              <div className="box-large">
                <p>
                  All data is stored with Amazon Web Services (AWS). AWS
                  maintains several industry-recognized certifications,
                  including FedRAMP, ISO, SOC, PCI, and more.
                </p>
              </div>
              <div></div>
              <div className="box-large">
                <p>
                  AWS is also compliant with numerous regulations, privacy
                  standards, and frameworks, including HIPAA, HITECH, GLBA, the
                  EU Data Protection Directive, EU-US Privacy Shield, FISMA, and
                  more than 30 others.
                </p>
                <p>&nbsp;</p>
                <h2>Data control</h2>
              </div>
            </section>
            <section>
              <p className="box-large">
                As the processor of your data, we give you full control over
                your data to make the best decisions regarding collection and
                storage of data. Our services are specifically designed to limit
                personal data collection by default, requiring you as a customer
                to explicitly enable features that collect personal information.
              </p>
              <p>&nbsp;</p>
              <h2 className="box-large">Privacy and consent</h2>
            </section>
            <section>
              <div className="box-large">
                <p>
                  Your privacy is important to us, and so is being transparent
                  about how we collect, use, and share your information. In
                  our&nbsp;
                  <a className="primary" href="https://www.userback.io/privacy">
                    Privacy Policy
                  </a>
                  , we share what information we collect, how we use and store
                  that data, and how you can access and control your
                  information.
                </p>
                <p>&nbsp;</p>
                <h2>Security</h2>
              </div>
            </section>
            <section>
              <div className="box-large">
                <p>
                  Of course, privacy means nothing without security. Our highly
                  scalable and secured network ensures the security of your
                  data. We only collaborate with third parties selected after a
                  thorough assessment and make sure you and your customers have
                  the safest experience on our platform. Check out our{" "}
                  <a
                    className="primary"
                    href="https://www.userback.io/security"
                  >
                    security overview
                  </a>
                  &nbsp;to learn more.
                </p>
              </div>
              <div></div>
              <div className="!flex !flex-row !gap-0">
                <p>
                  If you have more questions regarding GDPR and our compliance,
                  please&nbsp;
                </p>
                <a className="primary" href="mailto:contact@userback.io">
                  contact us
                </a>
                .
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
