import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Hammer" size={32} className="text-accent" />
              <span className="text-2xl font-bold text-primary-foreground">ДорСтрой</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['Главная', 'О компании', 'Услуги', 'Портфолио', 'Отделы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-primary-foreground/90 hover:text-accent transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="главная" className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="text-primary-foreground animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Строительство дорог мирового класса
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Профессиональное строительство, ремонт и обслуживание дорожного полотна с использованием передовых технологий
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white"
                  onClick={() => scrollToSection('контакты')}
                >
                  Получить консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={() => scrollToSection('портфолио')}
                >
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/83866086-0abc-4d78-86cd-58fc47efd5d4/files/5d2359c5-c334-4b59-ad26-a86be485e25e.jpg" 
                alt="Дорожная техника"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Award', value: '15+', label: 'Лет на рынке' },
              { icon: 'TrendingUp', value: '500+', label: 'Реализованных проектов' },
              { icon: 'Users', value: '200+', label: 'Специалистов' },
              { icon: 'CheckCircle', value: '100%', label: 'Качество работ' },
            ].map((stat) => (
              <Card key={stat.label} className="text-center hover-scale border-secondary/20">
                <CardContent className="pt-6">
                  <Icon name={stat.icon} size={48} className="mx-auto mb-4 text-accent" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ДорСтрой — ведущая компания в области дорожного строительства с 15-летним опытом работы. 
              Мы специализируемся на комплексном подходе к созданию транспортной инфраструктуры: 
              от проектирования до сдачи объекта под ключ.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: 'Target', 
                title: 'Наша миссия', 
                text: 'Создание надёжной и безопасной дорожной инфраструктуры для комфортного передвижения граждан' 
              },
              { 
                icon: 'Lightbulb', 
                title: 'Наши ценности', 
                text: 'Профессионализм, инновации, ответственность и стремление к совершенству в каждом проекте' 
              },
              { 
                icon: 'Rocket', 
                title: 'Наше видение', 
                text: 'Стать эталоном качества в дорожном строительстве и лидером отрасли в регионе' 
              },
            ].map((item) => (
              <Card key={item.title} className="hover-scale border-secondary/20">
                <CardContent className="pt-6">
                  <Icon name={item.icon} size={40} className="mb-4 text-accent" />
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по строительству и эксплуатации дорожных объектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Construction',
                title: 'Строительство дорог',
                description: 'Проектирование и строительство автомобильных дорог любой категории с использованием современных технологий',
                features: ['Федеральные трассы', 'Региональные дороги', 'Городские магистрали', 'Подъездные пути']
              },
              {
                icon: 'Wrench',
                title: 'Ремонт дорожного полотна',
                description: 'Капитальный и текущий ремонт дорог с восстановлением всех эксплуатационных характеристик',
                features: ['Ямочный ремонт', 'Восстановление покрытия', 'Укрепление обочин', 'Устранение деформаций']
              },
              {
                icon: 'Settings',
                title: 'Обслуживание дорог',
                description: 'Комплексное обслуживание и содержание дорожных объектов круглый год',
                features: ['Зимнее содержание', 'Уборка территории', 'Мониторинг состояния', 'Профилактические работы']
              },
            ].map((service) => (
              <Card key={service.title} className="hover-scale border-secondary/20">
                <CardContent className="pt-6">
                  <Icon name={service.icon} size={48} className="mb-4 text-accent" />
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Icon name="CheckCircle2" size={16} className="mr-2 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Портфолио проектов</h2>
            <p className="text-lg text-muted-foreground">Примеры успешно реализованных объектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Федеральная трасса М-11',
                category: 'Строительство',
                image: 'https://cdn.poehali.dev/projects/83866086-0abc-4d78-86cd-58fc47efd5d4/files/09b4ab98-1c6c-4d04-8b0e-ff08321bf036.jpg',
                description: 'Строительство 45 км федеральной трассы с четырьмя полосами движения',
                specs: ['Срок: 18 месяцев', 'Протяженность: 45 км', 'Бюджет: 2.5 млрд руб']
              },
              {
                title: 'Городская магистраль',
                category: 'Ремонт',
                image: 'https://cdn.poehali.dev/projects/83866086-0abc-4d78-86cd-58fc47efd5d4/files/69b9c718-154e-4b9f-8c49-ef2bbd661bf8.jpg',
                description: 'Капитальный ремонт центральной магистрали с заменой всех слоёв покрытия',
                specs: ['Срок: 6 месяцев', 'Протяженность: 12 км', 'Бюджет: 800 млн руб']
              },
              {
                title: 'Региональная дорога Р-258',
                category: 'Строительство',
                image: 'https://cdn.poehali.dev/projects/83866086-0abc-4d78-86cd-58fc47efd5d4/files/5d2359c5-c334-4b59-ad26-a86be485e25e.jpg',
                description: 'Строительство региональной дороги с мостовыми переходами',
                specs: ['Срок: 24 месяца', 'Протяженность: 67 км', 'Бюджет: 3.2 млрд руб']
              },
            ].map((project) => (
              <Card key={project.title} className="overflow-hidden hover-scale border-secondary/20">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="space-y-2">
                    {project.specs.map((spec) => (
                      <div key={spec} className="flex items-center text-sm">
                        <Icon name="Info" size={14} className="mr-2 text-accent" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отделы" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Структура компании</h2>
            <p className="text-lg text-muted-foreground">Наши отделы и направления работы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Compass', name: 'Проектный отдел', description: 'Разработка проектной документации' },
              { icon: 'HardHat', name: 'Отдел строительства', description: 'Производство работ на объектах' },
              { icon: 'ClipboardCheck', name: 'Отдел контроля качества', description: 'Технический надзор и приёмка работ' },
              { icon: 'Truck', name: 'Отдел логистики', description: 'Поставка материалов и техники' },
              { icon: 'Calculator', name: 'Финансовый отдел', description: 'Бухгалтерия и планирование' },
              { icon: 'FileText', name: 'Юридический отдел', description: 'Правовое сопровождение' },
              { icon: 'Shield', name: 'Служба охраны труда', description: 'Обеспечение безопасности на объектах' },
              { icon: 'Headphones', name: 'Отдел по работе с клиентами', description: 'Клиентский сервис и поддержка' },
            ].map((department) => (
              <Card key={department.name} className="hover-scale border-secondary/20">
                <CardContent className="pt-6 text-center">
                  <Icon name={department.icon} size={40} className="mx-auto mb-3 text-accent" />
                  <h3 className="font-bold text-primary mb-2">{department.name}</h3>
                  <p className="text-sm text-muted-foreground">{department.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">Готовы обсудить ваш проект</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card className="border-secondary/20">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="example@mail.ru" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              {[
                { icon: 'MapPin', title: 'Адрес', text: 'г. Москва, ул. Дорожная, д. 15' },
                { icon: 'Phone', title: 'Телефон', text: '+7 (495) 123-45-67' },
                { icon: 'Mail', title: 'Email', text: 'info@dorstroy.ru' },
                { icon: 'Clock', title: 'Режим работы', text: 'Пн-Пт: 9:00 - 18:00' },
              ].map((contact) => (
                <Card key={contact.title} className="hover-scale border-secondary/20">
                  <CardContent className="pt-6 flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name={contact.icon} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">{contact.title}</h3>
                      <p className="text-muted-foreground">{contact.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Hammer" size={28} className="text-accent" />
                <span className="text-2xl font-bold">ДорСтрой</span>
              </div>
              <p className="text-primary-foreground/80">
                Профессиональное строительство и обслуживание дорог с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Строительство дорог</li>
                <li>Ремонт дорожного полотна</li>
                <li>Обслуживание дорог</li>
                <li>Проектирование</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@dorstroy.ru</li>
                <li>г. Москва, ул. Дорожная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 ДорСтрой. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
