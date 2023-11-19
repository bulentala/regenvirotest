export default function Example({ title }) {
  return (
    <div className='relative py-6'>
      <div className='absolute inset-0 flex items-center' aria-hidden='true'>
        <div className='w-full border-t border-gray-300' />
      </div>
      <div className='relative flex justify-center'>
        <span className='bg-white px-3 text-2xl font-semibold leading-6 text-gray-900'>
          {title}
        </span>
      </div>
    </div>
  );
}
