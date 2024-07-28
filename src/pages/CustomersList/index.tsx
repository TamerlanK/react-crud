import { useEffect, useState } from "react";
import { ICustomer } from "../../type";
const CustomersListPage = () => {
  const [customerData, setCustomerData] = useState<ICustomer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/customers")
      .then((res) => res.json())
      .then((data) => setCustomerData(data));
  }, []);

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Title
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                DELETE
              </th>
              <th scope="col" className="px-6 py-3">
                Add To Favourite
              </th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={customer.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {customer.id}
                </th>
                <td className="px-6 py-4">{customer.companyName}</td>
                <td className="px-6 py-4">{customer.contactTitle}</td>
                <td className="px-6 py-4">
                  {customer?.address?.city}, {customer?.address?.country}
                </td>
                <td className="px-6 py-4">
                  <button className="bg-red-600 text-white p-2 rounded-xl hover:bg-red-800 ease-in duration-300">
                    DELETE
                  </button>
                </td>
                <td className="px-6 py-4 text-3xl text-center cursor-pointer">
                  ♡
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersListPage;
