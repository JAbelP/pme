import React from 'react';

export const MyFooter = () => {
  return (
    <div className="bg-white pb-10">
      <div className="text-black bg-white pl-5 py-6 text-center lg:flex lg:flex-row lg:justify-evenly">
            <div className="capitalize">
                <div className="pb-2">
                    <div className="text-black text-5xl mb-3 font-bold leading-9">
                    <h4 className="capitalize">get in touch!</h4>
                    </div>
                    <div className="flex-col justify-center items-center text-2xl">
                        <span className="font-bold leading-relaxed">Email: </span>
                        <span className="LinkInfoPowermasterelectricCom text-black font-normal leading-relaxed"> info@powermasterelectric.com</span>
                    </div>

                    <div className="justify-start items-start gap-1 text-2xl">
                        <span className="StrongPhone text-black font-bold leading-relaxed">Phone: </span>
                        <span className="Link9195574477 text-black font-normal leading-relaxed">919-557-4477 </span>
                    </div>

                    <div className="justify-start items-start text-2xl">
                    <div className="StrongOfficeHours">
                        <span style={{ color: 'black', fontSize: 'base', fontWeight: 'bold', lineHeight: 'relaxed' }}>Office Hours: </span>
                        <span style={{ color: 'black', fontSize: 'base', fontWeight: 'normal', lineHeight: 'relaxed' }}> Mon - Thurs: 8am-5pm</span>
                    </div>
                    </div>

                    <div className="pr-10 pb-px  justify-start items-start text-2xl">
                    <div className="StrongAddress">
                        <span style={{ color: 'black', fontSize: 'base', fontWeight: 'bold', lineHeight: 'relaxed' }}>Address: </span>
                        <span style={{ color: 'black', fontSize: 'base', fontWeight: 'normal', lineHeight: 'relaxed' }}> 311 Jarco Drive, Fuquay<br />Varina, NC 27526</span>
                    </div>
                    </div>
                </div>
            </div>

            <div className="pb-2">
                <div className="text-black text-5xl mb-3 font-bold leading-9">
                <h4 className="capitalize">Navigation</h4>
                </div>
                <div className="text-black text-2xl font-normal leading-relaxed">Services</div>
                <div className="text-black text-2xl font-normal leading-relaxed">Financing</div>
                <div className="text-black text-2xl font-normal leading-relaxed">Commercial</div>
            </div>

            <div className="pb-6">
                <div className="text-black text-5xl mb-3 font-bold leading-9">
                <h4>Help</h4>
                </div>
                <div className="text-black text-2xl font-normal leading-relaxed">About Us</div>
                <div className="text-black text-2xl font-normal leading-relaxed">Contact Us</div>
            </div>
      </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.9460040198705!2d-78.806668!3d35.53033200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac851b76af7ff3%3A0xa0e7de46989558ed!2s311%20Jarco%20Dr%2C%20Fuquay-Varina%2C%20NC%2027526!5e0!3m2!1sen!2sus!4v1689046850636!5m2!1sen!2sus"  height="300" style={{ border: 0, width: "96vw" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};
