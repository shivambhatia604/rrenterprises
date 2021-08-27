import React,{useState} from 'react';
import './EnquiryPage.styles.css'
import FormInput from '../../components/formInput/formInput.component';

export const EnquiryPage = () =>{
    const [partsInfo,setpartsInfo] = useState({
        BrandName: '',
        Model: '',
        PartName: '',
        PhoneNo: ''
      });

      const handleChange = event => {
        const { name, value } = event.target;
    
        setpartsInfo({...partsInfo, [name]: value });
      };
      const {BrandName,Model,PartName,PhoneNo}= partsInfo;

      return(
    
    <div>
        <div>SEND US AN ENQUIRY</div>
        <form className='sign-up-form' onSubmit={(e)=>e.preventdefault}>
          <FormInput
            type='text'
            name='BrandName'
            value={BrandName}
            handleChange={handleChange}
            label='Brand Name'
            required
          />
          <FormInput
            type='text'
            name='Model'
            value={Model}
            handleChange={handleChange}
            label='Model'
            required
          />
          <FormInput
            type='text'
            name='PartName'
            value={PartName}
            handleChange={handleChange}
            label='Part Name'
            required
          />
          <FormInput
            type='text'
            name='PhoneNo'
            value={PhoneNo}
            handleChange={handleChange}
            label='Phone No'
            required
          />
          <button type='submit'>SEND ENQUIRY</button>
        </form>
    </div>
      );
    };