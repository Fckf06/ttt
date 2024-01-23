import { useEffect, useState } from 'react'

export const App = () => {
  const [height, setHeight] = useState('100%')
  const [translate, setTranslate] = useState('')
  const [focus, setFocus] = useState(false)
  const [blur, setBlur] = useState(false)

  const arr = []
  for (let i = 0; i <= 200; i++) arr.push('N-8 88 888 8888 88888') 

  useEffect(() => {
    // let pendingUpdate = false;
    const viewportHandler = () => {
      // if (pendingUpdate) return;
      // pendingUpdate = true;
      // requestAnimationFrame(() => {
        // pendingUpdate = false;
        if (window.visualViewport && window.visualViewport.offsetTop >= 0) {
          if (blur && !focus) {
            console.log('fb', focus, blur);
            
            setHeight(`100%`);
            setTranslate("");
            setBlur(false)
          } else {
            setHeight(`${Math.max(0, window.visualViewport.height)}px`);
            setTranslate(
              `translateY(${Math.max(0, window.visualViewport.offsetTop)}px)`,
            );
          }
          // scroll(0, 0);
        }
      // });
    };

    if (window.visualViewport && window.visualViewport.offsetTop >= 0) {
      console.log(window.visualViewport.height);
      window.visualViewport.addEventListener("scroll", viewportHandler);
      window.visualViewport.addEventListener("resize", viewportHandler);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("scroll", viewportHandler);
        window.visualViewport.removeEventListener("resize", viewportHandler);
        setHeight("100%");
        setTranslate("");
      }
    };
  }, [setHeight, setTranslate, focus, blur]);

  return (
      <section style={{height: height, transform: translate}} className='section'>
        <h2>Header</h2>
        <div className='wrapper'>
          <ol>
            {
              arr.map(li => (
                <li>{li}</li>
              ))
            }
          </ol>
        </div>
        <form className='form'>
          <input 
            onFocus={() => {setFocus(true), setBlur(false), console.log('f')}}
            onBlur={() => {setFocus(false), setBlur(true), console.log('b')}}
          />
        </form>
      </section>
  )
}
