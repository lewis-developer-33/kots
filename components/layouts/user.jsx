import {AlbumIcon, DoorOpenIcon} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'



const UserLayout = ({children}) => {
  return (
    <main>
        <header className=' px-4 py-4 md:px-6 shadow-lg flex items-center justify-between'>
            <Link href='/'>
              <AlbumIcon/>
            </Link>
            <div className='md:hidden'>
              <DropdownMenu >
                <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <Link href='/profile'>Profile</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href='/search'>Search</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href='/bookmarks'>Bookmarks</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='text-destructive'>Log Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className='hidden md:flex items-center gap-3 font-semibold'>
              <Link href='/profile'>Profile</Link>
              <Link href='/search'>Search</Link>
              <Link href='/bookmarks'>Bookmarks</Link>
              <DoorOpenIcon/>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              
            </div>
            
        </header>
        <div>
            {children}
        </div>
    </main>
  )
}

export default UserLayout