const products = [
  {
    col: "WSF2422S",
    col1: "2422 SINGLE SCREW FINE WASHER",
    col2: "50",
    col3: "5,5",
    col4: "32",
    col5: "98 m3/435 gpm",
    col6: "43 m3/190 gpm",
    col7: "25 m3/110 gpm",
  },
  {
    col: "WSF3025S",
    col1: "3025 SINGLE SCREW FINE WASHER",
    col2: "80",
    col3: "11",
    col4: "25",
    col5: "135 m3/595 gpm",
    col6: "60 m3/265 gpm",
    col7: "34 m3/150 gpm",
  },
  {
    col: "WSF3625S",
    col1: "3625 SINGLE SCREW FINE WASHER",
    col2: "105",
    col3: "11",
    col4: "20",
    col5: "163 m3/720 gpm",
    col6: "72 m3/320 gpm",
    col7: "40 m3/180 gpm",
  },
  {
    col: "WSF4433S",
    col1: "4433 SINGLE SCREW FINE WASHER",
    col2: "175",
    col3: "15",
    col4: "17",
    col5: "390 m3/1720 gpm",
    col6: "172 m3/760 gpm",
    col7: "104 m3/460 gpm",
  },
  {
    col: "WSF3625T",
    col1: "3625 TWIN SCREW FINE WASHER",
    col2: "210",
    col3: "11x2",
    col4: "20",
    col5: "283 m3/1250 gpm",
    col6: "145 m3/640 gpm",
    col7: "81 m3/360 gpm",
  },
  {
    col: "WSF4433T",
    col1: "4433 TWIN SCREW FINE WASHER",
    col2: "350",
    col3: "15x2",
    col4: "17",
    col5: "635 m3/2800 gpm",
    col6: "326 m3/1440 gpm",
    col7: "183 m3/810 gpm",
  },
  {
    col: "WSF5435T",
    col1: "5435 TWIN SCREW FINE WASHER",
    col2: "500",
    col3: "22x2",
    col4: "15",
    col5: "839 m3/3700 gpm",
    col6: "397 m3/1750 gpm",
    col7: "212 m3/935 gpm",
  },
];

export default function Example() {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      {/* <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-base font-semibold leading-6 text-gray-900'>
            Users
          </h1>
          <p className='mt-2 text-sm text-gray-700'>
            A list of all the users in your account including their name, col1,
            col2 and col3.
          </p>
        </div>
        <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
          <button
            type='button'
            className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Add user
          </button>
        </div>
      </div> */}
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                    ></th>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                    ></th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      CAPACITY
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Power(Kw)
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      RPM
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      .150mm/100#
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      .100mm/150#
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      .075mm/200#
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {products.map((product) => (
                    <tr key={product.col2}>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {product.col}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {product.col1}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {product.col2}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {product.col3}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {product.col4}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {product.col5}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {product.col6}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {product.col7}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
