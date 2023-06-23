"use client";
import Button from "../Button/Button";
import { useState } from "react";

const Content = ({ activeTab, setActiveTab }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    prevCollegeName: "",
    prevCollegeGrade: "",
    universityName: "",
    depName: "",
  });
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNextClick = () => {
    setActiveTab(activeTab + 1);
  };

  const handleBackClick = () => {
    setActiveTab(activeTab - 1);
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      age: "",
      prevCollegeName: "",
      prevCollegeGrade: "",
      universityName: "",
      depName: "",
    });
    setActiveTab(0);
  };

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    const name = formData.name;
    const phoneNumber = formData.phoneNumber;
    const age = formData.age;
    const prevCollegeName = formData.prevCollegeName;
    const prevCollegeGrade = formData.prevCollegeGrade;
    const universityName = formData.universityName;
    const depName = formData.depName;

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phoneNumber,
          age,
          prevCollegeName,
          prevCollegeGrade,
          universityName,
          depName,
        }),
      });

      if (!response.ok) {
        setSubmitting(false)
        throw new Error("Request failed with status: " + response.status);
      } else {
        setSubmitting(false)
        // submitStatus("Form Submittied")
        handleCancel();
      }
    } catch (error) {
      setSubmitting(false)
      console.error(error);
    }
  };

  return (
    <div className="flex-1">

      <div className="flex  text-start justify-center mt-16">
        <form onSubmit={handleSubmit}>
          {activeTab === 0 && (
            <div>
              <div className="flex flex-col mb-3">
                <label htmlFor="name" className="text-gray-300 font-bold mb-2">
                  Enter your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border text-black border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col mb-3">
                <label htmlFor="name" className="text-gray-300 font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="border text-black border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="name" className="text-gray-300 font-bold mb-2">
                  Age
                </label>
                <input
                  type="text"
                  className="border text-black border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button text="Next" onClick={handleNextClick} />
            </div>
          )}

          {activeTab === 1 && (
            <div>
              <div className="flex flex-col mb-3">
                <label htmlFor="name" className="text-gray-300 font-bold mb-2">
                  Previous College Name
                </label>
                <input
                  type="text"
                  className="border text-black border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  name="prevCollegeName"
                  value={formData.prevCollegeName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="name" className="text-gray-300 font-bold mb-2">
                  Previous College Grade
                </label>
                <input
                  type="text"
                  className="border text-black border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  name="prevCollegeGrade"
                  value={formData.prevCollegeGrade}
                  onChange={handleInputChange}
                />
              </div>
              <Button
                className="justify-start"
                text="Back"
                onClick={handleBackClick}
              />
              <Button
                className="justify-start"
                text="Next"
                onClick={handleNextClick}
              />
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <div className="flex flex-col mb-3">
                <label htmlFor="name" className="text-gray-300 font-bold mb-2">
                  University Name
                </label>
                <input
                  type="text"
                  className="border text-black border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  name="universityName"
                  value={formData.universityName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="name" className="text-gray-300 font-bold mb-2">
                  Enter Department name
                </label>
                <input
                  type="text"
                  className="border text-black border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  name="depName"
                  value={formData.depName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-start mb-4">
                <Button text="Back" onClick={handleBackClick} />
                <Button text="Cancel" onClick={handleCancel} />
                <Button text={`${submitting? "Loading..." : "Save"}`} />
              </div>
            </div>
          )}
        </form>
      </div>

      {/* <p className="text-center p-6  italic text-green-500">{submitStatus}</p> */}
    </div>
  );
};

export default Content;
