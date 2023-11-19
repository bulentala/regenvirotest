const products = [
  {
    col: "C60-1",
    col1: "WSCC60-1",
    col2: "60 TON/HR COMPACT WASHING PLANT",
    col3: "60",
  },
  {
    col: "C90-1",
    col1: "WSCC90-1",
    col2: "90 TON/HR COMPACT WASHING PLANT",
    col3: "90",
  },
  {
    col: "C1301",
    col1: "WSCC1301",
    col2: "130 TON/HR COMPACT WASHING PLANT",
    col3: "130",
  },
  {
    col: "C1801",
    col1: "WSCC1801",
    col2: "180 TON/HR COMPACT WASHING PLANT",
    col3: "180",
  },
  {
    col: "C2501",
    col1: "WSCC2501",
    col2: "250 TON/HR COMPACT WASHING PLANT",
    col3: "250",
  },
  {
    col: "C90DF",
    col1: "WSCC90DF",
    col2: "90 TON/HR DRY FEED COMPACT PLANT",
    col3: "90",
  },
  {
    col: "C2502",
    col1: "WSCC2502",
    col2: "250 TON/HR TWO PRODUCT COMPACT PLANT",
    col3: "250",
  },
  {
    col: "C1302",
    col1: "WSCC1302",
    col2: "130 TON/HR TWO PRODUCT COMPACT PLANT",
    col3: "130",
  },
  {
    col: "T90-2",
    col1: "WSCT90-2",
    col2: "90 TON/HR TWO DECK SCREEN COMPACT PLANT",
    col3: "90",
  },
  {
    col: "T1302",
    col1: "WSCT1302",
    col2: "130 TON/HR TWO DECK SCREEN COMPACT PLANT",
    col3: "130",
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
