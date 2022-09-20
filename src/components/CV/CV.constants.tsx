import {
  Document as XDocument,
  Image,
  Page as XPage,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import { User } from 'firebase/auth';
import React from 'react';

import { MONTH_YEAR } from '../../constants/date.constants';
import { ExperienceItem, Personal, Skill } from '../../store/profile';
import { Date } from '../Date/Date';

export const CVStyles = StyleSheet.create({
  experienceTitle: {
    fontWeight: 500,
    margin: 12,
  },
  experience: {
    borderBottom: '1px solid #d1d1d1',
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Roboto',
  },
  x: {
    display: 'flex',
    flexDirection: 'row',
  },
  y: {
    display: 'flex',
  },
  title: {
    marginLeft: 12,
    marginTop: 12,
    marginBottom: 12,
    fontSize: 24,
    fontWeight: 600,
    textTransform: 'uppercase',
    borderBottom: '1px solid #d1d1d1',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 12,
    backgroundColor: '#d1d1d1',
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  text: {
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 14,
    textAlign: 'justify',
  },
  image: {
    width: 150,
    marginRight: 12,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

type CVTemplateParams = {
  experience: ExperienceItem[];
  personal: Personal;
  skills: Skill[];
  user: User;
};

export const CVTemplate = ({
  experience,
  user,
  personal,
  skills,
}: CVTemplateParams) => {
  return (
    <XDocument>
      <XPage style={CVStyles.body}>
        <View style={CVStyles.x}>
          <Image src={user.photoURL as string} style={CVStyles.image} />

          <View>
            <Text style={CVStyles.title}>
              {personal.firstName} {personal.lastName}
            </Text>

            <View>
              <Text style={CVStyles.text}>E-mail: {user.email}</Text>
              <Text style={CVStyles.text}>Phone: {personal.phoneNumber}</Text>

              {personal.address && (
                <Text style={CVStyles.text}>Address: {personal.address}</Text>
              )}
            </View>
          </View>
        </View>

        {personal.aboutMe && (
          <View>
            <Text style={CVStyles.subtitle}>About me</Text>
            <Text style={CVStyles.text}>{personal.aboutMe}</Text>
          </View>
        )}

        <View>
          {skills.length ? (
            <View>
              <Text style={CVStyles.subtitle}>Skills</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                {skills.map((skill) => {
                  return (
                    <View key={skill.name} style={{ width: '25%' }}>
                      <Text style={CVStyles.text}>{skill.name}</Text>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          marginHorizontal: 12,
                          marginBottom: 12,
                        }}
                      >
                        {Array.from(Array(5)).map((_, index) => (
                          <View
                            key={index}
                            style={{
                              backgroundColor:
                                index + 1 <= Number(skill.rate)
                                  ? '#1f1f1f'
                                  : '#d1d1d1',
                              width: 5,
                              height: 5,
                              marginRight: 5,
                            }}
                          />
                        ))}
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          ) : (
            <Text> </Text>
          )}
        </View>

        <View>
          {experience.length ? (
            <View>
              <Text style={CVStyles.subtitle}>Experience</Text>
              {experience.map((item) => {
                return (
                  <View style={CVStyles.experience} key={item.title}>
                    <Text style={CVStyles.experienceTitle}>{item.title}</Text>
                    <Text style={CVStyles.text}>
                      {<Date timestamp={item.from} format={MONTH_YEAR} />} -{' '}
                      {<Date timestamp={item.to} format={MONTH_YEAR} />}
                    </Text>
                    <Text style={CVStyles.text}>{item.description}</Text>
                  </View>
                );
              })}
            </View>
          ) : (
            <Text> </Text>
          )}
        </View>
      </XPage>
    </XDocument>
  );
};
