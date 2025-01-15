import React, { useState, useEffect } from 'react';
import './body.css';


const Lienhe = () => {
  const initialValues = { username: "", email: "", content: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFromErrors] = useState({username: '', email: '', content: '',   phone: ''});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFromErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  // form validation function
  const validate = (values) => {
    const errors = {username: '', email: '', content: '', phone: ''};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Bạn cần nhập tên";
    }
    if (!values.email) {
      errors.email = "Bạn cần nhập email";
    } else if (!regex.test(values.email)) {
      errors.email = "Định dạng email không chính xác";
    }
    if (!values.phone) {
      errors.phone = "Bạn cần nhập số điện thoại";
    }
    if (!values.content) {
      errors.content = "Bạn cần nhập nội dung";
    }

    return errors;
  };

  return (
     <div id="5" className="w-[1920px] px-[200px] pt-16 pb-32 bg-gray-100 flex-col justify-start items-start gap-8 inline-flex">
    <div className="self-stretch flex-col justify-start items-start gap-8 flex">
      <div className="text-[#b32024] text-4xl font-normal leading-[95.99px]">Liên hệ</div>
      <form onSubmit={handleSubmit} className="formcontact">
      <div className="self-stretch  flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch flex-col justify-start items-start gap-8 flex">
          {/* Tên của bạn */}
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <input
            type="text"
            name="username"
            placeholder="Tên của bạn"
            className="text-[#b3b9c4] text-2xl font-normal leading-9
            self-stretch px-8 py-4 bg-white rounded-lg justify-start items-center gap-2.5 inline-flex"
            aria-describedby="userNamehelp"
            value={formValues.username}
            onChange={handleChange}
          />
        <p className="text-danger">{formErrors.username}</p>
          </div>
        {/* Kết thúc tên của bạn */}

          {/* Liên hệ */}
            
          <div className="self-stretch justify-between items-center gap-8 inline-flex">
          <div className=" flex-col justify-start items-start gap-2 flex w-1/2">
            <input
              type="email"
              name="email"
              placeholder="Email của bạn"
              className="text-[#b3b9c4] text-2xl font-normal leading-9
              self-stretch px-8 py-4 bg-white rounded-lg justify-start items-center gap-2.5 inline-flex"
              aria-describedby="emailHelp"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="text-danger">{formErrors.email}</p>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex w-1/2">
          <input
            type="number"
            name="phone"
            placeholder="Điện thoại của bạn"
            className="text-[#b3b9c4] text-2xl font-normal leading-9
            self-stretch px-8 py-4 bg-white rounded-lg justify-start items-center gap-2.5 inline-flex"
            aria-describedby="phoneHelp"
            value={formValues.phone}
            onChange={handleChange}
          />
          <p className="text-danger">{formErrors.phone}</p>
          </div>

          </div>
          {/* Kết thúc liên hệ */}

          {/* Nội dung liên hệ */}
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <textarea
            name="content"
            placeholder="Nội dung liên hệ"
            className="text-[#b3b9c4] text-2xl font-normal leading-9
            self-stretch px-8 py-4 bg-white rounded-lg justify-start items-center gap-2.5 inline-flex"
            value={formValues.content}
            onChange={handleChange}
          />
           <p className="text-danger">{formErrors.content}</p>
          </div>
          {/* Kết thúc nội dung liên hệ */}
         
        </div>
        
       {/* Submit */}
          <div className="self-stretch h-[68px] flex-col justify-start items-end gap-2.5 flex">
            <div className="w-[150px] h-[68px] justify-start items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-[#b32024] rounded-full border border-[#b32024] justify-center items-center gap-2.5 flex">
              <button type="submit" className="text-white text-2xl font-normal leading-9">
          Gửi
        </button>
              </div>
            </div>
          </div>
        {/* Kết thúc Submit */}
        </div>
        </form>
    </div>
      </div>
      
  
     
  );
};

export default Lienhe;
