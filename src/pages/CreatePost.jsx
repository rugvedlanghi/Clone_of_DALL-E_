import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {preview} from '../assets';
import { getRandomPrompt } from '../utils';
import { Loader,FormField } from '../Components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  // made for getting in contact with api and waiting for response/img
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {

  }

  const handleSubmit = () =>{
  }
  
  //  to type values in our form field, it is going to take key-plus event
  //  and update the new event which we type
  const handleChange = (e) => {
    setForm({...form, [e.target.name] : [e.target.value]})
  }
  // this is made to ensure that we get a new prompt everytime 
  const handleSurpriseMe = () => {
      const randomPrompt = getRandomPrompt(form.prompt)
      setForm({...form,prompt:randomPrompt})
  }

  return (

    
    <section className='max-w-7xl mx-auto'>
        <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create </h1>
        <p className='mt-2 text-[#666e75] text-[18px] max-w[500px]'>Create the images that you never imagined by using DALL-E open AI</p>
        </div>
        
        <form className='mt-16 max-w-3xl' onSubmit={handleChange}>
          <div className='flex flex-col gap-5'>
            <FormField
              labelName= "your Name"
              type = "Text"
              name = "name"
              placeholder= "John Doe"
              value = {form.name}
              handleChange ={handleChange}
            />
            <FormField
              labelName= "prompt"
              type = "Text"
              name = "prompt"
              placeholder= "a pencil and watercolor drawing of a bright city in the future with flying cars"
              value = {form.prompt}
              handleChange ={handleChange}
              isSurpriseMe
              handleSurpriseMe ={handleSurpriseMe} 
            />
             {/* this done for creating a place where AI generated image will be shown  but also preview of the image incase it hasn't been already generated */}
            <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex-justify-center items-center'>
                {form.photo ? (
                  <img
                    src={form.photo}  
                    alt={form.prompt}
                    className='w-full h-full object.contain '
                  />
                ): (
                  <img
                    src={preview}
                    alt={preview}
                    className='w-9/12 h-9/12 object-contain opacity-40' 
                  />
                )}

                {generatingImg && (
                  <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]rounded-lg '>
                    <Loader/>
                  </div>
                )}
            </div>
          </div>

          <div className='mt-5 flex gap-5'>
            <button
            type="button"
            onClick={generateImage}
            className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            >  
            {generatingImg ? 'Generating...': 'Generate '}
            </button>
          </div>

        </form>

    </section>
  )
}

export default CreatePost