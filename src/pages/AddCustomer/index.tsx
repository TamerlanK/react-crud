import { useState } from "react"

const AddCustomerPage = () => {
  const [companyName, setCompanyName] = useState("")
  const [contactTitle, setContactTitle] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  return (
    <div className="max-w-3xl w-full mx-auto bg-white p-3 rounded-md">
      <h2 className="mb-6 mt-4 text-center text-2xl font-semibold">
        Add Customer
      </h2>
      <form className="w-full space-y-4">
        <div className="flex items-center gap-x-3">
          <label htmlFor="companyName" className="font-semibold cursor-pointer">
            <span className="text-red-600 mr-2">*</span>Company Name
          </label>
          <input
            id="companyName"
            type="text"
            className=" p-2 rounded-md border grow"
            placeholder="Enter company name"
          />
        </div>
      </form>
    </div>
  )
}

export default AddCustomerPage
