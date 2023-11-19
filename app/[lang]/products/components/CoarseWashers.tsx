const products = [
  {
    col: "3018S",
    col1: "WRC3018S",
    col2: "3018 SINGLE COARSE WASHER",
    col3: "1X15 Kw",
    col4: "125",
  },
  {
    col: "3618S",
    col1: "WRC3618S",
    col2: "3618 SINGLE COARSE WASHER",
    col3: "1x22 Kw",
    col4: "175",
  },
  {
    col: "3018T",
    col1: "WRC3018T",
    col2: "3018 TWIN COARSE WASHER",
    col3: "2x15Kw",
    col4: "250",
  },
  {
    col: "3618T",
    col1: "WRC3618T",
    col2: "3618 TWIN COARSE WASHER",
    col3: "2X22 Kw",
    col4: "350",
  },
  {
    col: "4420T",
    col1: "WRC4420T",
    col2: "4420 TWIN COARSE WASHER",
    col3: "2x30 Kw",
    col4: "450",
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
                    >
                      MODEL
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                    >
                      PRODUCT CODE
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      DESCRIPTION
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Power(*)
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      CAPACITY
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
