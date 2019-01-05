Candidate task for Cinemaloop Web Front group

Welcome. 
You have an opportunity to show your best abilities in the next 24 hours. The task has 3 levels of complexity. The project bootstrap was created for you to save time, so you can start coding right away.

1. The task is considered complete if the home page looks like the attached image: task.png
2. At minimum 3 sliders should be displayed on the home page.
3. Make sure that sliders have a rounded thumb and it is moving.
4. Slider track should change the color.
5. For simplicity you can use colors: 'red', 'gray', 'black' and 'white'.
6. The project is in React 16.7 and should utilize all practices and methods of React.
7. index.html file should not be modified.
8. Jquery use is not allowed.
9. You can use additional libraries. If you add anyhing via npm, please notify us when submitting completed task for review. 

##Level1

Level1 checks if you can code in React and CSS

1. In Home component create 3 sliders according to image.
2. Use flexbox to position objects in the middle of the page.
3. Output results into console in the form of Objects: ageRange:{minAge: 29, maxAge: 44}...
4. You do not need to output results next to the thumb of the slider.
5. You can eject the project and configure css-modules in webpack.config (optional).
6. You can use classnames library for dynamic class assignment in css or inline styling in JSX

##Level2

Level2 checks if you can manage Component based design

1. Create a Component Slider - do not use Class, it should be a functional Component.
2. Supply css classes, parameters via props.
3. Use map function in Home: push different props to Slider component in Home.
4. Your Home's return should look like: 
<pre>
    return(
      <div>
        {Something.map(item => (
          <Slider 
            min={item.min}
            ......
          />
        ))}
      </div>
    );
</pre>
5. Output result to console and near the thumb of the slider.

##Level3

Level3 check if you are familiar with Redux and Redux sagas - NOTE do not use Redux Thunk

1. Configure actions and reducers to receive all results into the application's state.
2. Configure new route and add Navigation bar component called Results.
3. Display results in any format, but it should contain name of slider and what is displayed: Age range: Minimum age is... Maximum age is ... - design of your choice.
4. Configure a saga to act as simulation of communication to backend - use JS function for that.
5. Add any type of spinner - to show loading. You can use installed library React Spinners.
6. You can add a submit button that will activate spinner and then redirect you to new page with results.
7. Add Redux Forms and use Slider component inside the form (extra credit)
