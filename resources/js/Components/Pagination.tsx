import { Link } from '@inertiajs/react';

type PaginationProps = {
  links: {url: string, label: string, active: boolean}[]
}

export default function Pagination({
    links
}: PaginationProps) {
    return links.length && (
    <div className='flex mt-4 space-x-2'>
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.url}
            className={
              link.active 
              ? 'bg-indigo-600 text-white px-4 py-2 border-indigo-600 rounded-md'
                : 'text-primary hover:bg-indigo-600 hover:text-white px-4 py-2 border rounded-md'
            }
            dangerouslySetInnerHTML={{__html: link.label}}
          />
        ))}
    </div>
    )
}
