const SOCIAL_NETWORKS = Object.freeze({

    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    SKYPE: "SKYPE",
    GOOGLE_PLUS: "GOOGLE_PLUS",

});

/*
const DOMAIN_ICONS = new Map();

DOMAIN_ICONS.set(SOCIAL_NETWORKS.FACEBOOK, "./assets/images/icons/socialNetworks/facebook.png");

DOMAIN_ICONS.get(user.contacts[0].domainName);*/

const users = [
    {
        id: 1,
        name: "Первуха",
        surname: "Петросян",
        description: "extremely large text...",
        imageSrc: "https://pickaface.net/gallery/avatar/acrovin559439058dc7f.png",
        contacts: /*[
            {
                domainName: "facebook",
                href: "#",
            },
        ]*/ [
            {
                name: SOCIAL_NETWORKS.FACEBOOK,
                href: "#",
            }, {
                name: SOCIAL_NETWORKS.TWITTER,
                href: "#",
            }, {
                name: SOCIAL_NETWORKS.SKYPE,
                href: "#",
            }, {
                name: SOCIAL_NETWORKS.GOOGLE_PLUS,
                href: "#",
            },
        ],
    },
    {
        id: 2,
        name: "Вторуха",
        surname: "Матемаха",
        description: "extremely large text...",
        imageSrc: "https://pickaface.net/gallery/avatar/unr_myself_190918_1012_9lyr3j.png",
        contacts: [
            {
                name: SOCIAL_NETWORKS.FACEBOOK,
                href: "#",
            },{
                name: SOCIAL_NETWORKS.TWITTER,
                href: "#",
            }, {
                name: SOCIAL_NETWORKS.SKYPE,
                href: "#",
            },{
                name: SOCIAL_NETWORKS.GOOGLE_PLUS,
                href: "#",
            },
        ],
    },
    {
        id: 3,
        name: "Третерюха",
        surname: "Сигезмуха",
        description: "extremely large text...",
        imageSrc: "https://pickaface.net/gallery/avatar/frhnlbs52106c3e7ae20.png",
        contacts: [
            {
                name: SOCIAL_NETWORKS.FACEBOOK.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.FACEBOOK.icon,
            },{
                name: SOCIAL_NETWORKS.TWITTER.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.TWITTER.icon,
            }, {
                name: SOCIAL_NETWORKS.SKYPE.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.SKYPE.icon,
            },{
                name: SOCIAL_NETWORKS.GOOGLE_PLUS.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.GOOGLE_PLUS.icon,
            },
        ],
    },
    {
        id: 4,
        name: "Четверюха",
        surname: "Перемуха",
        description: "extremely large text...",
        imageSrc: "https://pickaface.net/gallery/avatar/20120417_062541_4205_gonalves.png",
        contacts: [
            {
                name: SOCIAL_NETWORKS.FACEBOOK.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.FACEBOOK.icon,
            },{
                name: SOCIAL_NETWORKS.TWITTER.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.TWITTER.icon,
            }, {
                name: SOCIAL_NETWORKS.SKYPE.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.SKYPE.icon,
            },{
                name: SOCIAL_NETWORKS.GOOGLE_PLUS.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.GOOGLE_PLUS.icon,
            },
        ],
    },
    {
        id: 5,
        name: "Пятерюха",
        surname: "Селезнюха",
        description: "extremely large text...",
        imageSrc: "https://pickaface.net/gallery/avatar/49682159_190314_0618_cn43.png",
        contacts: [
            {
                name: SOCIAL_NETWORKS.FACEBOOK.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.FACEBOOK.icon,
            },{
                name: SOCIAL_NETWORKS.TWITTER.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.TWITTER.icon,
            }, {
                name: SOCIAL_NETWORKS.SKYPE.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.SKYPE.icon,
            },{
                name: SOCIAL_NETWORKS.GOOGLE_PLUS.title,
                href: "#",
                iconSrc: SOCIAL_NETWORKS.GOOGLE_PLUS.icon,
            },
        ],
    },
];

const userListElem = document.getElementById("usersList");

appendUsersListItems(userListElem, users);

// --- //

function appendUsersListItems(usersListElem, users) {
    users.forEach(
        user => {
            usersListElem.append(createUserListItemElem(user));
        }
    );
}

function createUserListItemElem(user) {

    const userListItemElem = document.createElement("li");
    userListItemElem.setAttribute("id", user.id);

    userListItemElem.append( createUserCardElem(user) );

    return userListItemElem;
}

function createUserCardElem(user) {
    const userCardWrapperElem = document.createElement("div");

    userCardWrapperElem.classList.add('userCardWrapper');
    userCardWrapperElem.classList.add('flexContainer');
    userCardWrapperElem.classList.add('flexDirectionColumn');
    userCardWrapperElem.classList.add('alignItemCenter');

    userCardWrapperElem.append(createUserPictureElem(user));
    userCardWrapperElem.append(createUserFullNameElem(user));
    userCardWrapperElem.append(createUserDescriptionElem(user));
    userCardWrapperElem.append(createDeleteButtonElem(user));

    // userCardWrapperElem.append(createUserContactsContainer(user));

    return userCardWrapperElem;
}

function createUserDescriptionElem({description}) {
    const userDescriptionElem = document.createElement("p");
    userDescriptionElem.classList.add('userDescription');

    userDescriptionElem.innerText = `${description}`;

    return userDescriptionElem;
}

/*function createUserContactsContainer(user) {
    const userContactsContainer = document.createElement("div");
    userContactsContainer.classList.add('userContactsContainer');

    userContactsContainer.append( createUserContactsLinkElem(user) );

    return userContactsContainer;
}*/

/*

function appendUsersContactsItems(usersListElem, users) {
    users.forEach(
        user => {
            usersListElem.append(createUserListItemElem(user));
        }
    );
}

*/

/*function createUserContactsLinkElem(user) {
    const userContactsLinkElem = document.createElement("a");
    userContactsLinkElem.setAttribute('href','#');

    userContactsLinkElem.append( getUserContactsElem(user) );

    return userContactsLinkElem;
}*/

/*function getUserContactsElem({contacts}) {
    const userContactsElem = document.createElement('img');
    userContactsElem.setAttribute('src', contacts.iconSrc);
    userContactsElem.setAttribute('alt', contacts.name);

    return userContactsElem;
}*/

function getUserPictureElem({imageSrc}) {
    const userPictureElem = document.createElement('img');
    userPictureElem.setAttribute('src', imageSrc ? imageSrc : "./assets/images/icons/user_icon.png");
    userPictureElem.setAttribute("alt", "user picture");

    return  userPictureElem;
}

function createUserPictureElem(user) {
    const userPictureContainerElem = document.createElement("div");
    userPictureContainerElem.classList.add('userPictureContainer');

    userPictureContainerElem.append( getUserPictureElem(user) );

    return userPictureContainerElem;
}

function createUserFullNameElem({name, surname}) {
    const userFullNameElem = document.createElement("h3");
    userFullNameElem.classList.add('userFullName');
    userFullNameElem.classList.add('userFullNameMargin');

    userFullNameElem.innerText = `${name} ${surname}`;

    return userFullNameElem;
}

function createDeleteButtonElem({id}) {
    const deleteButtonElem = document.createElement('img');
    deleteButtonElem.classList.add('deleteButton');
    deleteButtonElem.setAttribute('src', './assets/images/icons/cross.png');
    deleteButtonElem.setAttribute('alt', 'DELETE');

    deleteButtonElem.addEventListener('click', (event) => {
        event.stopPropagation();
        const userListItemElem = document.getElementById(id);
        userListItemElem.remove();
    });

    return deleteButtonElem;
}
