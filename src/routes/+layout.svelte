<script>
    import '../app.css'
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <a class="btn btn-ghost text-xl normal-case" href="/">Tessellate</a>
    </div>
    <div class="flex-none gap-2">
        <button class="btn btn-ghost"><a href="/events">Events</a></button>
        <button class="btn btn-ghost"><a href="/stems/">Stems</a></button>
        <button class="btn btn-ghost"><a href="/about-us">About Us</a></button>
    </div>
    <div class="dropdown dropdown-end">
        <span tabindex="-1" class="avatar btn btn-circle btn-ghost">
            <div class="w-10 rounded-full">
                <img src="/stock_profile.jpg" alt="Profile" />
            </div>
        </span>
        <ul
            tabindex="-1"
            class="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-36 bg-base-100 p-2 shadow"
        >
            <li>
                <a href="."> Profile </a>
            </li>
            <li><a href=".">Settings</a></li>
            <li><a href=".">Logout</a></li>
        </ul>
    </div>
</div>

<slot />
