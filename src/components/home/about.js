import SectionHeader from '@/components/common/section-header';
import { Button } from '@/components/common/button';

const About = () => {
  return (
    <div className={''}>
      <SectionHeader
        title={'Quince - Hành trình mang giấc ngủ ngon đến với mọi nhà'}
        quote={
          'Chất lượng tuyệt vời, giấc ngủ hoàn hảo – Đó là lời cam kết của chúng tôi.'
        }
      />
      <div className={'mt-10 flex bg-primary'}>
        <img
          src="./home_story_banner.webp"
          alt="home_story_baner"
          className={'float-left w-1/2'}
        />
        <div className={'float-right h-full w-1/2 space-y-5 px-20 py-10'}>
          <h2 className={'text-2xl font-semibold text-fourth'}>QUINCE</h2>
          <p className={'w-2/3 text-fourth'}>
            Quince là thương hiệu chuyên cung cấp chăn ga gối đen chất lượng
            cao, uy tín tại Hà Nội. Với mong muốn mang giấc ngủ ngon đến với mọi
            nhà, chúng tôi không ngừng nỗ lực để cải thiện chất lượng sản phẩm,
            dịch vụ và giá trị mà chúng tôi mang lại cho khách hàng.
          </p>
          <Button variant={'secondary'} size={'lg'} className={''}>
            Xem thêm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
