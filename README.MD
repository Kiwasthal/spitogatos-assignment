<div>
  <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'>
  <img src='https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white'>
</div>

# Spitogatos Assignment

<hr>

<h4>Deployed version <a href='https://kiwasthal.github.io/spitogatos-assignment/'>Link here!</a></h4>

## Tools Used

<hr>

<ul>
  <li>Vite</li>
  <li>React</li>
  <li>SASS</li>
  <li>Formik & YUP</li>
  <li>Framer Motion</li>
  <li>Font Awsome</li>
</ul>

<h5>Run Locally</h5>
<code>git clone git@github.com:Kiwasthal/spitogatos-assignment.git</code>
<br>
<code>npm install</code>
<br>
<code>npm run dev</code>

### Notes

<hr>
<h5>Extras</h6>

Enable Slider auto timer by uncommenting the useEffect snippet <code>src/components/Hero.jsx</code>
Enable FormSubmit modal by uncommenting < SubmitMsg /> at <code>src/components/Contact.jsx</code>

Information:

<li>Hero is set to max view-height in desktop versions and rescales properly on smaller screens</li>
<li>Larger screen breakpoint is set at 1075px</li>
<li>XL & 2XL breakpoints are used to  of the main section and the contact section</li>
<li>By default 2xl screen should be matching to the desktop version blueprint provided</li>
<li>Percentiles were calculated at various points along the app to grow-shrink items to fit design, the formula used was simply taking the pixel width of the item , divising it by the max width (by default 1920px) and multyplying by 100.</li>
<li>Some simple animations were added for better transition between hover and focus states</li>
