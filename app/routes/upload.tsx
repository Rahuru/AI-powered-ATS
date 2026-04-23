import Navbar from '~/components/Navbar'
import { useState, type FormEvent } from 'react'
import FileUploader from '~/components/FileUploader'

const Upload = () => {

    const [isProcessing,setIsProcessing] = useState(false)
    const [statusMessage,setStatusMessage] = useState("")
    const [file, setFile] = useState<File | null>(null)

    const handleFileSelect = (file: File | null) => {
       setFile(file);
    }
    const handleSubmit= (e: FormEvent<HTMLFormElement>) => {
        
    }
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />
            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusMessage}</h2>
                            <img src="/images/resume-scan.gif" alt="Processing..." className='w-full' />
                        </>
                    ) : (
                        <h2>Drop your resume for an ATS score and improvement tips</h2>
                    )}
                    {!isProcessing && (
                        <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                            <div className='form-div'>
                                <label htmlFor='company-name' >Company Name</label>
                                <input type='text' id='company-name' placeholder='Company Name' name='company-name' required />
                            </div>
                            <div className='form-div'>
                                <label htmlFor='job-title' >Job Title</label>
                                <input type='text' id='job-title' placeholder='Job Title' name='job-title' required />
                            </div>
                            <div className='form-div'>
                                <label htmlFor='job-description' >Job Description</label>
                                <textarea rows={5} id='job-description' placeholder='Job Description' name='job-description' required />
                            </div>
                            <div className='form-div'>
                                <label htmlFor='uploader' >Upload Resume</label>
                                <FileUploader onFileSelect={handleFileSelect}/>
                            </div>

                            <button type='submit' className='primary-button'>Analyze Resume</button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Upload
