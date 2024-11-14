import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Pagination from '@/Components/Pagination';

type UserIndexProps = {
  users: {
    data: {id: number, name: string, email: string}[],
    links: {url: string, label: string, active: boolean}[],
    total: number
  }
}

export default function UserIndex({ users }: UserIndexProps) {  
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='flex justify-between items-center mb-2'>
                      <label className='font-bold'>Total Users : {users.total}</label>

                      <Link 
                        href={route('users.create')} 
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                      >
                        Create User
                      </Link>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                           <table className='min-w-full'>
                            <thead>
                              <tr className='border-b-2'>
                                <th className='px-2 py-3 text-left text-lg font-medium text-black'>ID</th>
                                <th className='px-2 py-3 text-left text-lg font-medium text-black'>Name</th>
                                <th className='px-2 py-3 text-left text-lg font-medium text-black'>Email</th>
                                <th className='px-2 py-3 text-left text-lg font-medium text-black'>Role</th>
                              </tr>
                            </thead>
                            <tbody>
                              {users.data.map((user, i) => (
                                <tr key={i} className='border-b'>
                                  <td className='px-6 py-4 whitespace-nowrap'>
                                      {user.id}
                                  </td>
                                  <td className='px-6 py-4 whitespace-nowrap'>
                                      {user.name}
                                  </td>
                                  <td className='px-6 py-4 whitespace-nowrap'>
                                      {user.email}
                                  </td>
                                  <td className='px-6 py-4 whitespace-nowrap'>
                                      Role
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                           </table>
                           <Pagination 
                            links={users.links}
                           />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
