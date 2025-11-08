import React from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { styles as mainStyles } from '@/styles/_mainstyle';
import { styles as joinStyles } from '@/styles/_join';
import { HEROLOGO, GOOGLELOGO, FACEBOOKLOGO, BACKGROUNDIMAGE } from '@/constants';

export default function SignIn() {
  return (
    <ImageBackground source={BACKGROUNDIMAGE} style={mainStyles.backgroundImageContainer}>
      <SafeAreaView style={mainStyles.container}>
        <View style={mainStyles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={mainStyles.titleContainer}>
          <Text style={mainStyles.titleText}>Welcome back</Text>
        </View>
        <View style={mainStyles.titleSubTextContainer}>
          <Text style={mainStyles.titleSubText}>Sign in to continue to your account</Text>
        </View>

        <View style={joinStyles.formGroup}>
          <Text style={joinStyles.formLabel}>Email</Text>
          <TextInput style={joinStyles.formControl} placeholder="you@example.com" keyboardType="email-address" />

          <Text style={joinStyles.formLabel}>Password</Text>
          <View style={joinStyles.formPasswordControl}>
            <TextInput style={joinStyles.passwordControl} placeholder="••••••••" secureTextEntry />
          </View>

          <Text style={joinStyles.forgotPasswordText}>Forgot password?</Text>

          <TouchableOpacity style={joinStyles.primaryButton}>
            <Text style={joinStyles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <View style={joinStyles.dividerGroup}>
            <View style={joinStyles.divider} />
            <Text style={joinStyles.dividerText}>or</Text>
            <View style={joinStyles.divider} />
          </View>

          <View style={joinStyles.secondaryButtonGroup}>
            <TouchableOpacity style={[joinStyles.secondaryButton, { justifyContent: 'center' }] }>
              <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
              <Text style={joinStyles.secondaryButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[joinStyles.secondaryButton, { justifyContent: 'center' }] }>
              <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
              <Text style={joinStyles.secondaryButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={joinStyles.signupgroup}>
          <Text style={joinStyles.signupTitleText}>Don't have an account?</Text>
          <Link href="/join">
            <Text style={joinStyles.signupSubTitleText}> Join</Text>
          </Link>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
