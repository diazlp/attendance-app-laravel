import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

type UserIndexProps = {
  users: {id: number, name: string, email: string}[]
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
                              {users.map((user, i) => (
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
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
