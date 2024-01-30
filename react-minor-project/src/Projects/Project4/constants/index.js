export const jsxCodeArray = [
    { name: "<Routes>", classes: 'ml-0' },
    { name: "    <Route path='/' element={<Outlet />} >", classes: 'ml-8' },
    { name: "    <Route path='home' element={<P4Home />} />", classes: 'ml-16' },
    { name: "        <Route path='about' element={<P4ABout />} >", classes: 'ml-16' },
    { name: "            <Route path='loremtext' element={<P4Lorem data={<Lorem/>} />", classes: 'ml-24' },
    { name: "            <Route path='randomtext' element={<P4Lorem data={<RandomQuote/ >}  />", classes: 'ml-24' },
    { name: "        </Route>", classes: 'ml-16' },
    { name: "    <Route path='contact' element={<P4Contact />} />", classes: 'ml-16' },
    { name: "    <Route path='greeting' element={<Greeting/>} />", classes: 'ml-16' },
    { name: "</Route>", classes: 'ml-8' },
    { name: "    <Route path='/dashboard'>", classes: 'ml-8' },
    { name: "        <Route index element={<Dashboard/>} >", classes: 'ml-16' },
    { name: "        <Route path='create' element={<CreateUser />}", classes: 'ml-16' },
    { name: "        <Route path='update' element={<UpdateUser />}", classes: 'ml-16' },
    { name: "        <Route path='delete' element={<DeleteUser />}", classes: 'ml-16' },
    { name: "    </Route>", classes: 'ml-8' },
    { name: "</Routes>", classes: 'ml-0' },
];


const quotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "In the middle of difficulty lies opportunity. -Albert Einstein",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
    "The best way to predict the future is to create it. -Peter Drucker",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "Look deep into nature, and then you will understand everything better. -Albert Einstein",
    "In every walk with nature, one receives far more than he seeks. -John Muir",
    "The mountains are calling, and I must go. -John Muir",
    "Nature always wears the colors of the spirit. -Ralph Waldo Emerson",
    "The clearest way into the Universe is through a forest wilderness. -John Muir",
    "Nature does not hurry, yet everything is accomplished. -Lao Tzu",
    "To sit in the shade on a fine day and look upon the verdant green hills is the most perfect refreshment. -Jane Austen",
    "The goal of life is to make your heartbeat match the beat of the universe, to match your nature with Nature. -Joseph Campbell",
    "Life is either a daring adventure or nothing at all. -Helen Keller",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
];

export const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

export const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet beatae fugit non, deleniti dolorum temporibus? Excepturi, ullam ea, nesciunt suscipit error veritatis ipsum vitae praesentium recusandae quo expedita architecto dolorum, labore ipsam facere! Natus iusto beatae exercitationem quia? Obcaecati sit fuga officia ad esse voluptate error minima in? Deleniti nam libero totam quae voluptas aspernatur? Maxime, asperiores? Iusto, fugiat? Eaque incidunt, adipisci soluta veniam facilis maiores, sit blanditiis aliquam ad sequi quidem iure laborum cumque laboriosam voluptatibus unde fuga doloribus expedita atque cum! Qui, ducimus reprehenderit explicabo nemo corrupti quaerat eligendi assumenda corporis, eos beatae recusandae repudiandae soluta, accusantium aliquam dolorem incidunt et laborum optio deleniti architecto quae expedita! Ab veritatis id provident sequi ut vel quis omnis corporis unde porro dolores laudantium tempore laboriosam placeat consequatur suscipit distinctio, ratione inventore nam voluptas quibusdam nisi tenetur deserunt? Et voluptate molestias vel amet maxime tempora a ratione, sed accusantium doloremque odit dolore dolor error magni laudantium enim corrupti laboriosam animi iusto ad distinctio illum ducimus eveniet? Facere omnis quibusdam impedit recusandae, eius perferendis, blanditiis pariatur ipsa voluptatum nihil assumenda aspernatur saepe iste ipsum reprehenderit accusamus neque? Unde animi illo corrupti, cumque sapiente laborum maxime molestias ab nulla. Totam itaque possimus quas reprehenderit doloremque rerum deserunt quam suscipit, non repellendus quis magnam maiores omnis quidem fugiat at enim veritatis quos cumque, ullam mollitia? Similique deserunt quo odio quisquam, magni quas dolor quae minima cum laboriosam.'
