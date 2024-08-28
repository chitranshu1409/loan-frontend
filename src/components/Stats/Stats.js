import './Stats.css'


const stats = [
    { id: 1, name: 'Happy Costumer', value: '12k+' },
    { id: 2, name: 'Services', value: '23k+' },
    { id: 3, name: 'Conversion Ratio', value: '97%' },
    {id:4, name: 'Banks and NBFC', value: '120+'}
  ]
  
  export default function Example() {
    return (
      <div className="bg-white  py-14  sm:py-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="flex justify-around items-center  text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-1">
                <dt className=" stats-title text-xl  leading-7 text-gray-600">{stat.name}</dt>
                <dd className=" stats-value order-first text-6xl font-semibold tracking-tight text-red-700 sm:text-6xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  