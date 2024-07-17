import { getUser } from '@workos-inc/authkit-nextjs'
import { AutoPaginatable, OrganizationMembership, WorkOS } from '@workos-inc/node'
import React from 'react'

const NewListing = async() => {
    const {user} = await getUser()

    if(!user)
    {
        return(
            <div>Yo are not authenticated! Please log in first</div>
        )
    }


    const workos = new WorkOS(process.env.WORKOS_API_KEY)

    // let organisationMemberShips:AutoPaginatable<OrganizationMembership>|null = null;

    const organisationMemberShips = await workos.userManagement.listOrganizationMemberships({userId:user?.id})
  return (
    <div className="container">
    
    <div>
        {JSON.stringify(organisationMemberShips)}
        <h2 className='text-lg mt-6'>Existing Companies</h2>
        <p className='text-gray-500 text-sm mb-2'>Select the company to create a job listing</p>
        <div className="border border-blue-300 bg-blue-50 p-4 rounded-md">No companies found assinged to your user.</div>
        <h2 className='text-lg mt-6'>Create a new company</h2>
        <p className='text-gray-500 text-sm mb-2'>To create a job listing you should first register your company</p>
        <form action="" className='flex gap-2'>
            <input className='p-2 border border-gray-400 rounded-md' type="text" placeholder='company name...'/>
            <button className='bg-gray-200 px-4 py-2 rounded-md flex gap-2 items-center'>Create company</button>
        </form>
    </div>
    
    </div>
  )
}

export default NewListing