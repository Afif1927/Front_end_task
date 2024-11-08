import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCalendarDays, faComment, faPaperclip, faClipboard } from '@fortawesome/free-solid-svg-icons';
import Image from '../assets/image/model4.jpg';
import Image2 from '../assets/image/profile-pic (4).png';
import Image3 from '../assets/image/model5.jpg';
import Image4 from '../assets/image/model3.jpg';

const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const [attachments, setAttachments] = useState([]);

  // Toggle modal visibility
  const handlePaperclipClick = () => {
    setShowModal(!showModal);
  };

  // Handle file upload
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const fileDetails = files.map((file) => ({
      name: file.name,
      extension: file.name.split('.').pop()
    }));
    setAttachments(fileDetails);
  };

  return (
    <div className='bg-white text-[10px] rounded p-2'>
      {/* Header with Client and User Info */}
      <div className='flex justify-between mb-2'>
        <div className='flex gap-1 items-center'>
          <div className="w-[22px] h-[22px] rounded-full overflow-hidden">
            <img src={Image} alt="Client" className='w-full h-full object-cover' />
          </div>
          <h4>Client Name</h4>
        </div>
        <div className='flex gap-1 items-center'>
          <div className="w-[22px] h-[22px] rounded-full overflow-hidden">
            <img src={Image2} alt="User" className='w-full h-full object-cover' />
          </div>
          <h4>Mohammad Afif</h4>
        </div>
      </div>

      {/* Project Details */}
      <div className='flex justify-between mb-2'>
        <p className='flex gap-1'>
          <span className='text-gray-700'><FontAwesomeIcon icon={faLayerGroup} /></span>
          Lorem ipsum dolor consectetur adipisicing elit...
        </p>
        <h4 className='flex gap-1'>
          <span className='text-gray-700'><FontAwesomeIcon icon={faClipboard} /></span>1/2
        </h4>
      </div>

      {/* Footer with Icons and Details */}
      <div className='flex justify-between items-center'>
        <div className="w-[22px] h-[22px] rounded-full overflow-hidden">
          <img src={Image3} alt="Collaborator 1" className='w-full h-full object-cover' />
        </div>
        <div className="w-[22px] h-[22px] rounded-full overflow-hidden">
          <img src={Image4} alt="Collaborator 2" className='w-full h-full object-cover' />
        </div>
        <h4 className='bg-gray-300 h-[24px] w-[24px] rounded-full flex items-center justify-center font-bold'>12+</h4>
        <h4 className='flex gap-1'>
          <span className='text-gray-700'><FontAwesomeIcon icon={faComment} /></span>17
        </h4>
        <h4 className='flex gap-1 cursor-pointer' onClick={handlePaperclipClick}>
          <span className='text-gray-700'><FontAwesomeIcon icon={faPaperclip} /></span>16
        </h4>
        <h4 className='flex gap-1'>
          <span className='text-gray-700'><FontAwesomeIcon icon={faCalendarDays} /></span>30/12/2024
        </h4>
      </div>

      {/* Modal for Attachment Upload */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-80">
            <h2 className="text-lg font-semibold mb-4">Upload Attachments</h2>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="mb-4"
            />
            {/* Display list of attachments */}
            <div className="max-h-40 overflow-y-auto">
              {attachments.map((file, index) => (
                <div key={index} className="text-sm mb-2">
                  {file.name} <span className="text-gray-500">({file.extension})</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-3 bg-blue-500 text-white px-4 py-1 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;


