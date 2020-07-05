import React from 'react'
import Image80 from '../images/Image80';
import Image100 from '../images/Image100';
import Button from '../sharedComponents/Button';

function BlogPost(props) {
    const {titleNumber, openDialog } = props;
    return (
        <section className="BlogPost">
            <div className="top">
                <Image80 />
                <div className="top_midle">
                    <h2>Blog post {titleNumber}</h2>
                    <h6>Posted date: 11.12.2019 at 12:00 by Some person 1</h6>
                </div>
                <div className="top_right">
                    <Button click={openDialog} label="Edit" />
                    <Button label="Delete" />
                </div>
            </div>
            <div className="midle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti debitis aliquam quas, quibusdam, beatae deserunt molestias, at nisi accusantium a nostrum dignissimos necessitatibus. Amet cum, debitis nihil accusamus perferendis illum libero! Amet fugiat optio eligendi dolor exercitationem deserunt quas molestias quod eum earum, itaque laudantium animi quae, neque sed modi odio omnis saepe. Unde veritatis sit, doloremque nostrum placeat quibusdam iure modi nulla aliquid recusandae autem, numquam earum omnis magni expedita in odit soluta! Voluptate soluta eum consectetur dolorem aut quasi! Laboriosam distinctio, facere qui eveniet neque ipsa quaerat culpa eum molestias cupiditate pariatur id rerum adipisci officia repellendus laborum, illum nulla quos labore nam minus! Sit, dicta? Repudiandae vitae, cum vero quae ad similique temporibus blanditiis laudantium doloribus sint facilis deserunt possimus, qui, laboriosam fuga quibusdam aspernatur at dolorum. Saepe, aut? Veniam animi, dolore sequi quaerat dolor repellat voluptatibus in accusamus amet, ipsa laboriosam, vel optio. Natus, ab? Eius, libero atque distinctio dicta cumque debitis praesentium placeat quam ipsam ad? Maiores doloremque, praesentium similique beatae incidunt in a ullam! Quidem, in soluta incidunt id quo impedit dignissimos, fugit, animi consequatur vel iure at itaque laboriosam consectetur veniam cupiditate voluptas modi rerum nihil? Repudiandae, beatae. Eveniet praesentium vitae itaque blanditiis?
            </div>
            <div className="bottom">
                <Image100 />
                <Image100 />
                <Image100 />
            </div>            
        </section>
    )
}

export default BlogPost
