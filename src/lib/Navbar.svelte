<script>
    export let activePage = '';
  </script>
  
  <nav>
    <ul>
      <li><a href="/" class:active={activePage === 'home'}>Home</a></li>
      <li><a href="/uebersetze" class:active={activePage === 'uebersetze'}>Übersetzen</a></li>
    </ul>
  </nav>
  
  <style>
    nav ul {
      display: flex;
      list-style: none;
      padding: 0;
    }
    nav ul li {
      margin-right: 1rem;
    }
    nav ul li a {
      text-decoration: none;
    }
    .active {
      font-weight: bold;
    }
  </style>
  